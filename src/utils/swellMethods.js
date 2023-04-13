import {swell} from '@/utils/swell';

export const getProducts = async ({
    page = 1,
    sort = '',
    filters = {},
    limit = 100
}) => {
    return await swell.products.list({
        page, 
        limit,
        sort,
        $filters: filters,
        expand: ['variants', 'categories']
    })
}

export const getProductsBySlugOrID = async (slugOrID) => {
    return await swell.products.get(slugOrID)
}

export const getProductsByCategory = async ({
    page = 1,
    sort = '',
    categories,
    filters = {},
    limit = 100
}) => {
    console.log(filters)

    return await swell.products.list({
        page,
        limit,
        sort,
        categories,
        $filter: filters,
})
}

export const listFilters = async (products) => {
    return await swell.products.filters(products)
}


export const listCategories = async(limit = 100, page = 1) => {
    return await swell.categories.list({
        limit,
        page,
        expand: ['products']
    })
}

export const sortOptions = [
    { label: 'Latest', value: 'latest'},
    { label: 'Trending', value: 'trending'},
    { label: 'Price: Low to High', value: 'price_asc'},
    { label: 'Price: High to Low', value: 'price_desc'},
]

export const sortMap = new Map([
    ['latest', ''],
    ['price-asc', 'price_asc'],
    ['price-desc', 'price_desc'],
    ['trending', 'trending'],
])