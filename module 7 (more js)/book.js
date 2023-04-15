function paperRequirements(book1, book2, book3) {
    const pageForPerBook1 = 100;
    const pageForPerBook2 = 200;
    const pageForPerBook3 = 300;

    const totalPageForBook1 = book1 * pageForPerBook1;
    const totalPageForBook2 = book2 * pageForPerBook2;
    const totalPageForBook3 = book3 * pageForPerBook3;

    const totalPage = totalPageForBook1 + totalPageForBook2 + totalPageForBook3;
    return totalPage
}

const myBookQuantity = paperRequirements(2, 3, 4);
console.log(myBookQuantity);