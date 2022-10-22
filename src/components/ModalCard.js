import { View, Modal, Pressable, Text, StyleSheet } from 'react-native';

import CardHeader from 'components/CardHeader';

export default function ModalCard( { children, visible, title, onClose } ) {
  const closeModal = () => {
    if (!onClose) return;

    onClose(this);
  }

  return (
    <View style={ styles.modalContainer }>
      <Modal
        animationType="slide"
        transparent={ true }
        visible={ visible }
      >
        <View style={ styles.modalCard }>
          <CardHeader title={ title }>
            { onClose &&
              <Pressable
                onPress={ closeModal }
                style={ styles.closeButton }
                accessibilityLabel="Close this pop-up menu"
              >
                <Text style={ styles.closeButtonText }>+</Text>
              </Pressable>
            }
          </CardHeader>
          { children }
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'fixed',
    bottom: 0,
  },

  modalCard: {
    height: '100%',
    padding: '20px',
    paddingTop: '10px',
    marginTop: '60px',
    borderRadius: '3px',
    backgroundColor: '#314',
    shadowColor: '#180028',
    shadowRadius: '50px',
    shadowOffset: {
      width: 0,
      height: '-25px',
    }
  },

  closeButton: {
    width: '40px',
    height: '40px',
    alignSelf: 'end',
  },

  closeButtonText: {
    width: '50%',
    transform: 'rotate(45deg) translateX(50%)',
    lineHeight: 0,
    fontSize: '56px',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 200,
  }
});
