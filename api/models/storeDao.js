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

module.exports = { getStores }