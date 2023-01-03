const appDataSource = require('./dataSource')

const createUserReview = async(storeId, rating, taste_rate, price_rate, service_rate, image, content, userId) => {

    return await appDataSource.query(
        `INSERT INTO
            evaluations (
                user_id,
                store_id,
                rating,
                taste_rate,
                price_rate,
                service_rate,
                image,
                content
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )
            `, [userId, storeId, rating, taste_rate, price_rate, service_rate, image, content]
        )
}

module.exports = { createUserReview }