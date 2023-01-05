const ErrorMessage = ({ children}) => {
    return (
        <div
            style={{
                width:500,
                padding:10,
                borderRadius: 4,
                backgroundColor: "blue",
                textAlign: "center",
                color: "white",
                textTransform: "capitalize",
                margin: "auto"
            }}
            >
            {children}
        </div>
    );
};

export {ErrorMessage};