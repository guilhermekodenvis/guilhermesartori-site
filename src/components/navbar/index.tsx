import { Container } from "../container"
import "./styles.css"

type NavBarProps = {
    active?: "home" | "history" | "capacities"
    historyRef: React.MutableRefObject<null>
    capacitiesRef: React.MutableRefObject<null>
    contactRef: React.MutableRefObject<null>

}

export const NavBar: React.FC<NavBarProps> = ({ active = "home", capacitiesRef, contactRef, historyRef }) => {
    const handleSectionButtonClick = (reference: React.MutableRefObject<HTMLElement | null>) => {
        reference.current?.scrollIntoView({ behavior: 'smooth' });
    }


  return (
    <nav>
        <Container>
            <>
                <div className="nav-content">
                    <div>
                        <p className="logo">
                            <span className="green">
                                {"<"}
                            </span>
                            GS
                            <span className="green">
                                {"/>"}
                            </span>
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li className={`${active === "home" && "active"}`}>Início</li>
                            <li className={`${active === "history" && "active"}`} onClick={() => handleSectionButtonClick(historyRef)}>História</li>
                            <li className={`${active === "capacities" && "active"}`} onClick={() => handleSectionButtonClick(capacitiesRef)}>Capacidades</li>
                            <li onClick={() => handleSectionButtonClick(contactRef)}>Contato</li>
                        </ul>
                    </div>
                </div>
            </>
        </Container>
    </nav>
  )
}