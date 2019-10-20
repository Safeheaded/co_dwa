import React, { Component } from 'react';
import styles from './AboutSite.module.sass';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

class AboutSite extends Component {
    state = { showing: true };

    render() {
        if (localStorage.getItem('root')) {
            return null;
        } else {
            localStorage.setItem('root', 'o co chodzi');

            const { showing } = this.state;
            const logo = require('./projekt-logo-co2.png');

            return !showing ? null : (
                <div className={styles.popup}>
                    <div className={styles.popup__content}>
                        <div className={styles.popup__header}>
                            <h1>O co chodzi?</h1>
                            <img
                                src={logo}
                                className={styles.popup__logo}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.popup__text}>
                            <h2>Witamy w aplikacji co2!</h2>
                            <p>
                                Celem aplikacji, który nam przyświęcał jest
                                podniesienie świadomości ludzi odnośnie tego
                                jakie środki transportu odpowiednio wytwarzają
                                ilość dwutlenku węgla do naszego środowiska.
                            </p>

                            <p>
                                Aplikacja w prosty sposób umożliwia
                                użytkownikowi sprawdzenia tego wybierając i
                                wpsiując określone wartości.
                            </p>
                            <br></br>
                            <p>
                                Zapraszamy do skorzystania z aplikacji. Zespół
                                Open Learn Giganty Mocy
                            </p>
                            <div
                                className={styles.popup__btn}
                                onClick={() =>
                                    this.setState({ showing: !showing })
                                }
                            >
                                <ThumbUpIcon></ThumbUpIcon>
                                &nbsp;Rozumiem
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default AboutSite;
