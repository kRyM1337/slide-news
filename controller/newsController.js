const NewsCollection = require('../model/newsMongoCollection.js')

const uploadNews = (req, res) => {
    const body = JSON.parse(req.body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a news object',
        })
    }

    const newsObject = new NewsCollection(body)

    if (!newsObject) {
        return res.status(400).json({ success: false, error: err })
    }

    newsObject
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: newsObject._id,
                message: 'News object created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'News object not created!',
            })
        })
}

const getNews = async (req, res) => {
    await NewsCollection.findOne({ newsId: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!news) {
            return res
                .status(404)
                .json({ success: false, error: `News object not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

/*const getAllNews = async (req, res) => {
    await NewsCollection.find({}, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!news.length) {
            return res
                .status(404)
                .json({ success: false, error: `News objects not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}*/

/*deleteNews = async (req, res) => {
    await NewsCollection.findOneAndDelete({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!news) {
            return res
                .status(404)
                .json({ success: false, error: `News object not found` })
        }

        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}*/

module.exports = {
    uploadNews,
    getNews
}