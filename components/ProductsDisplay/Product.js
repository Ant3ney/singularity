import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Product({
	actionType,
	actionLink,
	actionTitle,
	pluginMessage,
	thumbnail,
	title,
	description,
	price,
	className,
	slug,
}) {
	const actionButtonHref = (() => {
		switch (actionType) {
			case 'link':
				return actionLink;
			case 'pluginMessage':
				return `/contactus?pluginmessage=${pluginMessage}`;
			default:
				return `/contactus?pluginmessage=${pluginMessage}`;
		}
	})();

	return (
		<div className={`product-container ${className}`}>
			<a className='image-holder' href={`/products/${slug}`}>
				<img src={thumbnail} />
			</a>
			<a className='product-title-container' href={`/products/${slug}`}>
				<h3 className='blog-one__title product-title'>
					{title}

					<FontAwesomeIcon className='local-icon' icon={faInfoCircle} />
				</h3>
			</a>
			<p className='product-description-text'>{description}</p>
			<p className='product-price-text'>Starts at: ${price}</p>
			<div className='action-button-container'>
				{/* 
               Download TODO: Import extra variables from props. Use action type to decide
               weather the link displays a plugin message or an entire standalone link
            */}
				<a className='banner-one__btn thm-btn acton-button' href={actionButtonHref}>
					<span>{actionTitle}</span>
				</a>
			</div>
		</div>
	);
}
