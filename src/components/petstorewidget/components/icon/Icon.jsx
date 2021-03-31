import "./Icon.scss"
import { FiSliders, FiCheckCircle, FiXCircle, FiAlertCircle } from "react-icons/fi";
export const Icon = (props) => {
	const { name, className } = props;

	const classString = className ? `icon-svg ${name}-svg ${className}` : `icon-svg ${name}-svg`;
		switch (name) {
			case "filter":
				return (<FiSliders className={classString} />);
				
			case "available":
				return (<FiCheckCircle className={classString} />);
				
			case "pending":
				return (<FiAlertCircle className={classString} />);
				
			case "sold":
				return (<FiXCircle className={classString} />);
				
			default:
				return " ";
		}
};