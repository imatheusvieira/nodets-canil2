type MenuOptions = '' | 'home' | 'dog' | 'cat' | 'fish' ;

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        home: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] =  true;
    }

    return returnObject;
}