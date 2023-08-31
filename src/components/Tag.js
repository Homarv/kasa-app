
const Tag = ({tag}) => {
    return (
        <div className="tags_container">
            {tag.map((tag, index) => (
                <div key={index} className="tag">
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tag;