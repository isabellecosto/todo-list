export function useLocalStorage() {

    /**
     * Pega um item do localStorage e retorna o valor
     * @param {string} key 
     * @returns {string}
     */
    function getItemLocalStorage(key) {
        const item = localStorage.getItem(key)
        return JSON.parse(item) 
    }

    /**
     * Armazena um item no localStorage passando a chave e o valor dele
     * @param {string} key 
     * @param {any} value 
     */
    function setItemLocalStorage(key, value) {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    }

    return {
        getItemLocalStorage,
        setItemLocalStorage
    }
}


