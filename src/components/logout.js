
export default function Logout(props) {
    let logoutClicked = props.logoutClicked;

    return (
        <div 
        style={{
            display: "flex",
            height: "70",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingLeft: "75px",
            paddingRight:"75px",
        }}
        >
        <div 
        onClick={logoutClicked}
        style={{
            display: "flex",
            width: "116px",
            height: "42px",
            backgroundColor:"#000",
            borderRadius: "10px",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
        }}>

        </div>

        </div>
    )
}