const appDataSource = require('./dataSource')

const getStores = async() => {
    
    return await appDataSource.query(
            `SELECT
                s.id,
                s.name,
                s.address,
                s.phone_number,
                s.social_map_id,
                s.category,
                avg(e.rating) AS rating,
                avg(e.taste_rate) AS taste,
                avg(e.price_rate) AS price,
                avg(e.service_rate) AS service,
                count(l.store_id) AS likes
            FROM 
                evaluations e
            LEFT JOIN
                stores s ON s.id = e.store_id
		    LEFT JOIN
			    likes l  ON s.id = l.store_id
            GROUP BY
                s.id
        `
    )
}


const getAllStores = async () => {
    return appDataSource.query(
      `
      SELECT
      id,
      name,
      thumbnail_image
    FROM stores
    `
  )}


const getStoresByMood = async (moodId) => {
  return appDataSource.query(
    `
    SELECT
      m.type,
      JSON_ARRAYAGG(
        JSON_OBJECT('id', s.id, 'name', s.name, 'image', s.thumbnail_image) 
      ) as posts
    FROM moods as m
    LEFT JOIN evaluations_moods as em ON m.id = em.mood_id
    LEFT JOIN evaluations as e ON e.id = em.evaluation_id
    LEFT JOIN stores as s ON s.id = e.store_id
    WHERE em.mood_id = ?
    GROUP BY em.mood_id
    `,[moodId]
  )
}

const getStoreById = async (storeId) => {
    return appDataSource.query(
      `
      SELECT
        s.id,
        s.name,
        s.address,
        s.phone_number,
        s.longitude,
        s.latitude,
        s.thumbnail_image,
        c.type as category,
        JSON_ARRAYAGG(m.type) as mood
      FROM stores as s
      LEFT JOIN categories as c ON c.id = s.category_id
      LEFT JOIN evaluations as e ON e.store_id = s.id
      LEFT JOIN evaluations_moods as em ON em.evaluation_id = e.id
      LEFT JOIN moods as m ON em.mood_id = m.id
      WHERE s.id = ?
      GROUP BY s.id
      `,[storeId]
    )
}

const getStoreLikes = async (storeId) => {
  return appDataSource.query(
    `
    SELECT 
    COUNT(store_id) as likes
  FROM likes
  WHERE store_id = ?
    `,[storeId]
  )
}

const getReviewByStore = async (storeId) => {
  return appDataSource.query(
       `
       SELECT 
            u.email,
            e.user_id,
            e.rating,
            e.taste_rate,
            e.price_rate,
            e.service_rate,
            e.image,
            e.content,
            e.created_at
       FROM evaluations e
       JOIN users as u ON u.id = e.user_id

       WHERE store_id = ?
       `,[storeId]
     )
   }

module.exports = {
  getAllStores,
  getStoresByMood,
  getStoreById,
  getStoreLikes,
  getReviewByStore,
  getStores
}