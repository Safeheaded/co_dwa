import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import styles from './AboutSite.module.sass';

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AboutSite() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    if (localStorage.getItem('root')) {
        return null;
    } else {
        localStorage.setItem('root', 'o co chodzi');

        // const logo = require('./projekt-logo-co2.png');

        return (
            <div>
                <Dialog
                    onClose={handleClose}
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <div>
                        <DialogTitle
                            id="alert-dialog-slide-title"
                            className={styles.DialogTitle}
                        >
                            {'O co chodzi?'}
                        </DialogTitle>
                        <div className={styles.img}></div>
                    </div>

                    <DialogContent>
                        <DialogContentText
                            id="alert-dialog-slide-description"
                            className={styles.DialogContentText}
                        >
                            Globalnym problemem, który powstał w połowie XX
                            wieku, a w ostatnich latach staje się jednym z
                            kluczowych jest globalne ocieplenie, czyli
                            podwyższenie średniej temperatury atmosfery przy
                            jednoczesnym ochładzaniu się stratosfery.
                            Odpowiedzialne za to zjawisko są tzw. gazy
                            cieplarniane. Jednym z nich jest dwutlenek węgla.
                        </DialogContentText>
                        <DialogContentText>
                            O ile każdy z nas nie ma wpływu na produkcję CO2
                            przez wielkich emitentów przemysłowych, o tyle każdy
                            z nas może dołożyć własną cegiełkę do zmniejszania
                            emisji tego szkodliwego gazu, choćby przez używanie
                            środków transportu w sposób odpowiedzialny przy
                            wykorzystaniu narzędzi przeliczających emisję CO2 w
                            codziennie używanych środkach komunikacji.
                        </DialogContentText>
                        <DialogContentText>
                            Nasza aplikacja odpowiada właśnie na tą potrzebę.
                            Dzięki niej każdy użytkownik w łatwy sposób
                            przeliczy ilość dwutlenku węgla emitowanego przez
                            siebie podczas korzystania ze środków transportu,
                            takich jak samochód osobowy, pociąg i autobus.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            &nbsp;Rozumiem
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

// import React, { Component } from 'react';
// import styles from './AboutSite.module.sass';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';

// class AboutSite extends Component {
//     state = { showing: true };

//     render() {
//         if (localStorage.getItem('root')) {
//             return null;
//         } else {
//             localStorage.setItem('root', 'o co chodzi');

//             const { showing } = this.state;
//             const logo = require('./projekt-logo-co2.png');

//             return !showing ? null : (
//                 <div className={styles.popup}>
//                     <div className={styles.popup__content}>
//                         <div className={styles.popup__header}>
//                             <h1>O co chodzi?</h1>
//                             <img
//                                 src={logo}
//                                 className={styles.popup__logo}
//                                 alt="logo"
//                             />
//                         </div>
//                         <div className={styles.popup__text}>
//                             <h2>Witamy w aplikacji co2!</h2>
//                             <p>
//                                 Celem aplikacji, który nam przyświęcał jest
//                                 podniesienie świadomości ludzi odnośnie tego
//                                 jakie środki transportu odpowiednio wytwarzają
//                                 ilość dwutlenku węgla do naszego środowiska.
//                             </p>

//                             <p>
//                                 Aplikacja w prosty sposób umożliwia
//                                 użytkownikowi sprawdzenia tego wybierając i
//                                 wpsiując określone wartości.
//                             </p>
//                             <br></br>
//                             <p>
//                                 Zapraszamy do skorzystania z aplikacji. Zespół
//                                 Open Learn Giganty Mocy
//                             </p>
//                             <div
//                                 className={styles.popup__btn}
//                                 onClick={() =>
//                                     this.setState({ showing: !showing })
//                                 }
//                             >
//                                 <ThumbUpIcon></ThumbUpIcon>
//                                 &nbsp;Rozumiem
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//     }
// }

// export default AboutSite;
