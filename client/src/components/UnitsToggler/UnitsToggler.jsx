import { FaWeightHanging } from 'react-icons/fa';

import './UnitsToggler.scss';

const UnitsToggler = ({ units, onClick: handleToggle }) => {
    return (
        <div className="toggler">
            <p className={`toggler__unit ${units === false && 'toggler__unit--on'}`}>Imperial</p>
            <button onClick={() => handleToggle()} className="toggler__button">
                <FaWeightHanging />
            </button>
            <p className={`toggler__unit ${units === true && 'toggler__unit--on'}`}>Metric</p>
        </div>
    );
};

export default UnitsToggler;
