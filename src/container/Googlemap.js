import React from "react";
import {map} from "google-maps-react";




class Googlemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            zoom: 10,
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    
    componentDidMount() {
      this.map = this.createMap()
      this.marker = this.createMarker()
      this.infoWindow = this.createInfoWindow()
    
      google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
    
      google.maps.event.addListener(this.marker, 'click', ()=> this.handleMarkerClick())
    }
    
    componentDidUnMount() {
      google.maps.event.clearListeners(map, 'zoom_changed')
    }
    
    createMap() {
      let mapOptions = {
        zoom: this.state.zoom,
        center: this.mapCenter()
      }
      return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }
    
    mapCenter() {
      return new google.maps.LatLng(
        this.state.defaultCenter.lat,
        this.state.defaultCenter.lng
      )
    }
    
    createMarker() {
      return new google.maps.Marker({
        position: this.mapCenter(),
        map: this.map
      })
    }
    
    createInfoWindow() {
      let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
      return new google.maps.InfoWindow({
        map: this.map,
        anchor: this.marker,
        content: contentString
      })
    }
    
    handleMarkerClick(){
        console.log("ow");
        this.setState({
          showModal: true
        });
        this.infowindow.open(map, marker);
    }
    
    handleZoomChange() {
      this.setState({
        zoom: this.map.getZoom()
      })
    }
    
    close() {
        this.setState({ showModal: false });
      }
    
    open() {
        this.setState({ showModal: true });
      }
    
      render() {
    
        const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );
    
        return <div>
        <div className="GMap">
          <div className='UpdatedText'>
            <p>Current Zoom: { this.state.zoom }</p>
          </div>
          <div className='GMap-canvas' ref="mapCanvas">
          </div>
        </div>
    
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Sourland Mountain Preserve Climbs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Sourland Mountain Preserve</h4>
              <p>Climbing is allowed in blank, but watch out for blank.</p>
    
              <h4>This is a Popover</h4>
              <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
    
              <h4>Tooltips in a modal</h4>
              <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
    
              <hr />
    
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      }
    }
export default Googlemap;