class IOSButton {}
class AndroidButton {}

//with out factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()

class ButtonFactory {
    createButton(os: string) : IOSButton | AndroidButton {
        if(os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

//with factory
const factory = new ButtonFactory();

