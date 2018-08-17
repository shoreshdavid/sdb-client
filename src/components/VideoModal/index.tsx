import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export class VideoModal extends React.Component<any, any> {
  public state = {
    modal: false,
  };

  public toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  public render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalBody>
            {this.props.contentType === 'video' ? (
              <iframe
                src={this.props.video}
                frameBorder={0}
                allowFullScreen
                style={{ position: 'relative', height: 300, width: '100%' }}
              />
            ) : (
              <audio controls style={{ width: '100%' }}>
                <source
                  src="http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3"
                  type="audio/mp3"
                />
              </audio>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
