import React from "react";

import Switch from "react-bootstrap-switch";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownItem,
    Container,
    Label,
    FormGroup,
    Row,
    Col,
    DropdownMenu
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import NavbarVPS from "components/Navbars/NavbarVPS";

function LandingPage() {
    const [nameMachine, setNameMAchine] = React.useState('Ubuntu 22.04')
    const [valueSSD, setValueSSD] = React.useState(10)
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);

    const handleRadioChangeNameMachine = (event) => {
        setNameMAchine(event.target.value);
    };
    const handleRadioChangeSSD = (event) => {
        setValueSSD(event.target.value);
    };
    

    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <NavbarVPS />
            <div style={{ marginTop: '110px' }}></div>
            <Container>
                <div id="inputs">
                    <h4>Create New Machine</h4>
                    <Row>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <label className="category" style={{ color: "#333333", fontSize: "12px" }}>Name of the virtual machine</label>
                                <Input
                                    value={`${nameMachine}-${valueSSD}GB`}
                                    placeholder="Ubuntu-2023"
                                    type="text"
                                ></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row id="checkRadios">
                        <Col className="mb-4" lg="3" sm="6">
                            <p className="category">select OC</p>
                            <FormGroup check className="form-check-radio">
                                <Label check>
                                    <Input
                                        checked={nameMachine === 'Ubuntu 22.04'}
                                        value="Ubuntu 22.04"
                                        onChange={handleRadioChangeNameMachine}
                                        id="exampleRadios"
                                        name="exampleRadios"
                                        type="radio"
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    Ubuntu 22.04
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                                <Label check>
                                    <Input
                                        checked={nameMachine === 'Debian'}
                                        value="Debian"
                                        onChange={handleRadioChangeNameMachine}
                                        id="exampleRadios2"
                                        name="exampleRadios"
                                        type="radio"
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    Debian
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row id="checkRadios">
                        <Col className="mb-4" lg="3" sm="6">
                            <p className="category">select size SSD</p>
                            <FormGroup check className="form-check-radio">
                                <Label check>
                                    <Input
                                        checked={valueSSD == 10}
                                        id="exampleRadios3"
                                        name="exampleRadios2"
                                        value={10}
                                        onChange={handleRadioChangeSSD}
                                        type="radio"
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    10 GB
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                                <Label check>
                                    <Input
                                        checked={valueSSD == 15}
                                        id="exampleRadios4"
                                        name="exampleRadios2"
                                        value={15}
                                        onChange={handleRadioChangeSSD}
                                        type="radio"
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    15 GB
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="info" type="button">
                        Create virtual machine
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default LandingPage;
