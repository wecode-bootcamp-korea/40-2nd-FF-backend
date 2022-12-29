const appDataSource = require('./dataSource')

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
    `
  )
}

module.exports = {
  getAllStores,
  getStoresByMood,
  getStoreById,
  getStoreLikes
}

