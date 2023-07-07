const baseURL = 'https://jesuscontreras26.github.io/wdd230/';
const linksURL = 'https://jesuscontreras26.github.io/wdd230/data/links.json';

async function fetchLinks(){
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}