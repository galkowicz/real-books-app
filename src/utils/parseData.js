export const parseBooksFromGoogle = (books) => {
    return books.map((book) => {
        const {volumeInfo = {}} = book;
        return {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            publishedDate: volumeInfo.publishedDate,
            description: volumeInfo.description
        }
    });
};