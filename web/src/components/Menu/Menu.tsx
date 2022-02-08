import "./Menu.css";

function Menu(props: any) {
    const { menu } = props
    const itens = (menuItens : Array<any>)=>{
        return (
            menuItens.map((item : any) => {
                return <li key={item.label}>
                            <a href={item.link}>
                                {item.label}
                            </a>
                        </li>
            })
        )
    }
    return (
        <ul>
            {itens(menu)}
        </ul>
    )
}

Menu.defaultProps = {
    menu: [
        {
            label: "Item",
            link: "#"
        }
    ],
};

export default Menu