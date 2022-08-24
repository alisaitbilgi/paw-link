function generateItemData(item: any) {
    return {
        id: item.productId ?? item.id,
        imgUrl: item?.media?.[0]?.linkFormat ?? item.image,
        description: item.name ?? item.title,
        price: item.finalPrice ?? item.price.discounted,
        score: item.customerReviewScore ?? (item.rating?.average ?? 0),
        reviewCount: item.customerReviewCount ?? (item.rating?.total ?? 0),
    };
}

export default generateItemData;
