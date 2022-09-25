const models = require('../models');

module.exports = {
    // add category
    create: async (req, res) => {
        try {
            const category = await models.Category.create(req.body); // name & description
            res.status(201).json({
                message: 'Category created successfully',
                error: 0,
                data: category,
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    },


    // find category
    // find all category
    list: async (req, res) => {
        try {
            const categories = await models.Category.findAll();

            res.status(200).json({
                message: 'Categories fetched successfully',
                data: categories,
                success: true,
                error: 0
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    },

    // find by id
    findById: async (req, res) => {
        try {
            const category = await model.category.findOne({
                where: {
                    id: req.params.id
                },
            })

            // if data is not found
            if (!category) throw new Error('Category not found');

            return res.status(200).json({
                message: 'Category fetched successfully',
                data: category,
                success: true,
                error: 0
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    },

    // update category
    update: async (req, res) => {
        try {
            const categoryId = req.params.id
            const getCategory = await models.Category.findOne({
                where: {
                    id: categoryId,
                },
            })

            // if data is not found
            if (!getCategory) throw new Error('Category not found');

            // update schema
            const name = req.body.name || getCategory.name;
            const description = req.body.description || getCategory.description;

            let category = await models.Category.update(
                {
                    name: name,
                    description: description
                },
                {
                    where: {
                        id: categoryId
                    }
                }
            )

            category = await models.Category.findOne({
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                message: 'Category updated successfully',
                data: category,
                success: true,
                error: 0
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    },

    // delete category
    destroy: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    }
}