window.addEventListener("load", solve);

// function solve(){

//     document.getElementById('publish-btn').addEventListener('click', createPost)
//     let title = document.getElementById('post-title');
//     let category = document.getElementById('post-category');
//     let content = document.getElementById('post-content');

//     function createPost(e){
//         let titleValue = title.value;
//         let categoryValue = category.value;
//         let contentValue = content.value;

//         if(!titleValue || !categoryValue || !contentValue){
//             return;
//         }

//         createDOMElements(titleValue, categoryValue, contentValue);
//     }

//     function createDOMElements(titleValue, categoryValue, contentValue){
//         let li = document.createElement("li");
//         li.classList.add("rpost");

//         let article = createArticle(titleValue, categoryValue, contentValue)

//         let editButton = document.createElement("button");
//         editButton.

//     }

//     function createArticle(titleValue, categoryValue, contentValue){
//         let article = document.createElement("article");
//         let h = document.createElement("h4");
//         h.textContent = titleValue;

//         let categoryP = document.getElementById("p");
//         categoryP.textContent = `Category: ${categoryValue}`;

//         let contentP = document.getElementById("p");
//         contentP.textContent = `Content: ${contentValue}`;

//         article.appendChild(h);
//         article.appendChild(categoryP);
//         article.appendChild(contentP);

//         return article
//     }
//     }


// 100/100 judge working decision 
function solve() {

    const titleInputElement = document.getElementById('post-title');
    const categoryInputElement = document.getElementById('post-category');
    const textInputElement = document.getElementById('post-content');
    const publishButtonElement = document.getElementById('publish-btn');
    const reviewListElement = document.getElementById('review-list');
    const publishListElement = document.getElementById('published-list');
    const clearButtonElement = document.getElementById('clear-btn');

    publishButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let title = titleInputElement.value;
        let category = categoryInputElement.value;
        let text = textInputElement.value;

        if (!title || !category || !text) {
            return;
        };

        let postLiElement = document.createElement('li');
        let articleElement = document.createElement('article');
        let titleH4Element = document.createElement('h4');
        let paragraphCategoryElement = document.createElement('p');
        let paragraphContentElement = document.createElement('p');
        let editButtonElement = document.createElement('button');
        let approveButtonElement = document.createElement('button');

        editButtonElement.textContent = 'Edit';
        approveButtonElement.textContent = 'Approve';

        postLiElement.classList.add('rpost');
        editButtonElement.classList.add('action-btn');
        editButtonElement.classList.add('edit');
        approveButtonElement.classList.add('action-btn');
        approveButtonElement.classList.add('approve');

        titleH4Element.textContent = title;
        paragraphCategoryElement.textContent = `Category: ${category}`;
        paragraphContentElement.textContent = `Content: ${text}`;

        articleElement.appendChild(titleH4Element);
        articleElement.appendChild(paragraphCategoryElement);
        articleElement.appendChild(paragraphContentElement);

        postLiElement.appendChild(articleElement);
        postLiElement.appendChild(editButtonElement);
        postLiElement.appendChild(approveButtonElement);


        reviewListElement.appendChild(postLiElement);

        titleInputElement.value = '';
        categoryInputElement.value = '';
        textInputElement.value = '';


        editButtonElement.addEventListener('click', (e) => {

            titleInputElement.value = title;
            categoryInputElement.value = category;
            textInputElement.value = text;

            postLiElement.remove()
        });

        approveButtonElement.addEventListener('click', (e) => {
            postLiElement.remove();
            postLiElement.removeChild(editButtonElement);
            postLiElement.removeChild(approveButtonElement);

            publishListElement.appendChild(postLiElement);

        });

        clearButtonElement.addEventListener('click', (e) => {
            console.log(publishListElement.children);
            Array.from(publishListElement.children).forEach(li => li.remove());
        })

    });
}