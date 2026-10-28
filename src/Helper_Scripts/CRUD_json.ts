export const readFile = async function(fileName:string) {
    try {
        const content = await fetch(`/src/Data/${fileName}.json`, {
            method:"GET"
        });
        const data = await content.json()
        return data
    }
    catch (err:Error|any) {
        console.log(err);
    };
};