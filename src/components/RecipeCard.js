import React from "react";
import { Link } from "gatsby";

const RecipeCard = ({ recipe }) => {

	let imageUrl = undefined;
	let imageStyle = undefined;

	if (recipe.frontmatter.image) {
		imageUrl = recipe.frontmatter.image;
		imageStyle = {
			backgroundImage: `url(${imageUrl})`
		}
	}
		
  return (
	  <div className="recipe recipe--list">
		<Link className="recipe__link" to={recipe.fields.slug}>
			<div className="recipe__image recipe__image--list" style={imageStyle}></div>
			<div className="recipe__info">
				<div className="recipe__heading recipe__heading--list">{recipe.frontmatter.name}</div>
				<div className="recipe__icon">
					<svg className="recipe__svg" width="24" height="24" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
				</div>
			</div>
		</Link>

	  </div>
  );
};

export default RecipeCard;