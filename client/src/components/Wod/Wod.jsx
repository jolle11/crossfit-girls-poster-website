import './Wod.scss';

const Wod = ({ wod }) => {
    const { name, type, lines } = wod;

    return (
        <div className="wod">
            <h2 className="wod__name">{name}</h2>
            <h3 className="wod__type">{type}</h3>
            {lines.map((line) => {
                return (
                    <p key={line} className="wod__line">
                        {line}
                    </p>
                );
            })}
        </div>
    );
};

export default Wod;
