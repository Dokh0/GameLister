const Catalogue = require('../models/catalogue.model')
const Platform = require('../models/platform.model')
const Platform_catalogue = require ('../models/platform_catalogue.model')


async function getAllPlatforms(req, res){
    try {
        const platform = await Platform.findAll()
        res.status(200).json(platform)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOnePlatform(req, res) {
    try {
        const platform = await Platform.findByPk(req.params.id)
        if (!platform){ res.status(500).send('Platform not found')}
        res.status(200).json(platform)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getplatformCatalogue (req, res) {
    try {
        const platform = await Platform.findByPk(req.query.id, {
            include: {
                model: Catalogue,
                attributes: ['title'], 
              },
              attributes: ['name'],  
        })
        if (platform) {
            return res.status(200).json(platform)
        } else {
            return res.status(404).send('Platform catalogue not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getAllPlatformYear(req, res) {
    const year = req.query.year;
    if (!year) {
        return res.status(400).json({ error: 'Year parameter is required' });
    }
    try {
        const platform = await Platform.findAll({
            where: {
                year: year
            }
        });
        res.status(200).json(platform);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function createPlatform(req, res) {
	try {
        const [platformExist, platform] = await Platform.create(req.body)
        if (!platformExist) {
			return res.status(200).json({ message: 'Platorm created', platform: platform })
        
        } else {
			return res.status(404).send('Platform is already in the Database')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function addGamePlatform(req, res) {
    try {
        const platform = await Platform.findByPk(req.body.platformId)
        const catalogue = await Catalogue.findByPk(req.body.catalogueId)

        const result = await platform.addCatalogue(catalogue)

        res.status(200).json(result)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updatePlatform(req, res) {
	try {
		const [platformExist, platform] = await Platform.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (platformExist !== 0) {
			return res.status(200).json({ message: 'Platform updated', platform: platform })
		} else {
			return res.status(404).send('Platform not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deletePlatform(req, res){
    try {
        const platform = await Platform.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({message: 'Platform deleted', platform: platform})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllPlatforms, getOnePlatform, getplatformCatalogue, getAllPlatformYear, createPlatform, updatePlatform, deletePlatform, addGamePlatform }