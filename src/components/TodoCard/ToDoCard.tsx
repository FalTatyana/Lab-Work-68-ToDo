

interface TodoCardProps {
    title: string;
    completed: boolean;
}

const TodoCard = ({ title, completed }: TodoCardProps) => {

    return (
        <div className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={completed}
                        readOnly
                    />
                    <span
                        style={{
                            textDecoration: completed ? "line-through" : "none",
                            opacity: completed ? 0.6 : 1,
                        }}
                    >
                        {title}
                    </span>
                </div>

                <button className="btn btn-danger btn-sm">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default TodoCard;

