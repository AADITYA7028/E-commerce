import "./directory.styles.scss";

import Category from "../category/category.component";

const Diretory = ({categories}) => {

    return(
        <div className="categories-container">
            {categories.map((category) => 
                <Category category = {category}/>
            )}
        </div>
    )
}

export default Diretory;