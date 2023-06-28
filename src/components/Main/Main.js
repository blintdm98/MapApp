import React, { useEffect, useState } from "react";
import { Viewer, Entity, CameraFlyTo, Scene } from "resium";
import { Cartesian3 } from "cesium";
import { Container } from "./MainStyles"

const Main = () => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
          try {
            const response = await fetch("/api/coordinates");
            const data = await response.json();
            setCoordinates(data);
          } catch (error) {
            console.error("Error fetching coordinates:", error);
          }
        };
    
        fetchCoordinates();
      }, []);
    return (
        <Container>
            <Viewer full
                    timeline={false}
                    animation={false}
                    baseLayerPicker={false}
                    geocoder={false}
                    homeButton={false}
                    sceneModePicker={false}
                    selectionIndicator={false}
                    navigationHelpButton={false}
                    vrButton={false}
                    fullscreenButton={false}
                    style={{inset: '7rem 0'}}
                    >
                    <CameraFlyTo destination={Cartesian3.fromDegrees(19.040236, 47.497913, 25000)}/>
                {coordinates && (
                    <Entity
                    name="Budapest"
                    description="Bajcsy-Zsilinszky street 5"
                    position={Cartesian3.fromDegrees(coordinates.lng, coordinates.lat)}
                    point={{ pixelSize: 15 }}
                    />
                )}
            </Viewer>
        </Container>
    )
}

export default Main;

