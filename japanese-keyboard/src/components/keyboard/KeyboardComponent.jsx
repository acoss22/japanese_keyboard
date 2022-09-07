import React, { useState } from "react";
import styles from './keyboard.module.css';

function KeyboardComponent(props) {
    const [useHiragana, setUseHiragana] = useState(true);
    const [pressedShift, setPressedShift] = useState(false);
    const toggleShift = (e) => {
        setPressedShift(!pressedShift);
    }
    
    const toggleHiragana = (e) => {
        setUseHiragana(!useHiragana);
    }
    

    return (
        <>
            {
            (useHiragana && !pressedShift) &&
                <div>
                    <div>
                        <button className={styles.button_5}>ろ</button>
                        <button className={styles.button_5}>ぬ</button>
                        <button className={styles.button_5}>ふ</button>
                        <button className={styles.button_5}>あ</button>
                        <button className={styles.button_5}>う</button>
                        <button className={styles.button_5}>え</button>
                        <button className={styles.button_5}>お</button>
                        <button className={styles.button_5}>や</button>
                        <button className={styles.button_5}>ゆ</button>
                        <button className={styles.button_5}>よ</button>
                        <button className={styles.button_5}>わ</button>
                        <button className={styles.button_5}>ほ</button>
                        <button className={styles.button_5}>へ</button>
                        <button className={styles.button_15}>Backspace</button>
                    </div>
                    <div>
                        <button className={styles.button_15}>Tab</button>
                        <button className={styles.button_5}>タ</button>
                        <button className={styles.button_5}>テ</button>
                        <button className={styles.button_5}>イ</button>
                        <button className={styles.button_5}>ス</button>
                        <button className={styles.button_5}>カ</button>
                        <button className={styles.button_5}>ン</button>
                        <button className={styles.button_5}>ナ</button>
                        <button className={styles.button_5}>ニ</button>
                        <button className={styles.button_5}>ラ</button>
                        <button className={styles.button_5}>せ</button>
                        <button className={styles.button_5}>゛</button>
                        <button className={styles.button_5}>゜</button>
                        <button className={styles.button_5}>む</button>
                    </div>
                    <div>
                        <button className={styles.button_15}>Caps Lock</button>
                        <button className={styles.button_5}>ち</button>
                        <button className={styles.button_5}>と</button>
                        <button className={styles.button_5}>し</button>
                        <button className={styles.button_5}>は</button>
                        <button className={styles.button_5}>き</button>
                        <button className={styles.button_5}>く</button>
                        <button className={styles.button_5}>ま</button>
                        <button className={styles.button_5}>の</button>
                        <button className={styles.button_5}>り</button>
                        <button className={styles.button_5}>り</button>
                        <button className={styles.button_5}>け</button>
                        <button className={styles.button_15}>Enter</button>
                    </div>
                    <div>
                        <button className={styles.button_15} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_5}>む</button>
                        <button className={styles.button_5}>つ</button>
                        <button className={styles.button_5}>さ</button>
                        <button className={styles.button_5}>そ</button>
                        <button className={styles.button_5}>ひ</button>
                        <button className={styles.button_5}>こ</button>
                        <button className={styles.button_5}>み</button>
                        <button className={styles.button_5}>も</button>
                        <button className={styles.button_5}>ね</button>
                        <button className={styles.button_5}>る</button>
                        <button className={styles.button_5}>め</button>
                        <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                    </div>
                    <div>
                        <button className={styles.button_5}>Ctrl</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_60} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_5}>Ctrl</button>
                    </div>
                </div>
            }
            {
            (useHiragana && pressedShift) &&
                <div>
                    <div>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}>ぁ</button>
                        <button className={styles.button_5}>ぅ</button>
                        <button className={styles.button_5}>ぇ</button>
                        <button className={styles.button_5}>ぉ</button>
                        <button className={styles.button_5}>ゃ</button>
                        <button className={styles.button_5}>ゅ</button>
                        <button className={styles.button_5}>ょ</button>
                        <button className={styles.button_5}>を</button>
                        <button className={styles.button_5}>ー</button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_15}>Backspace</button>
                    </div>
                    <div>
                        <button className={styles.button_15}>Tab</button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}>ぃ</button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}>「</button>
                        <button className={styles.button_5}>」</button>
                        <button className={styles.button_5}></button>
                    </div>
                    <div>
                        <button className={styles.button_15}>Caps Lock</button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_15}>Enter</button>
                    </div>
                    <div>
                   
                        <button className={styles.button_15} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}>っ</button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}></button>
                        <button className={styles.button_5}>、</button>
                        <button className={styles.button_5}>。</button>
                        <button className={styles.button_5}>・</button>
                        <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                    </div>
                    <div>
                        <button className={styles.button_5}>Ctrl</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_60} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_5}>Ctrl</button>
                    </div>
                </div>
            }
            {
            (!useHiragana && !pressedShift) &&
                <div>
                    <div>
                        <button className={styles.button_5}>ロ</button>
                        <button className={styles.button_5}>ヌ</button>
                        <button className={styles.button_5}>フ</button>
                        <button className={styles.button_5}>ア</button>
                        <button className={styles.button_5}>ウ</button>
                        <button className={styles.button_5}>エ</button>
                        <button className={styles.button_5}>オ</button>
                        <button className={styles.button_5}>ヤ</button>
                        <button className={styles.button_5}>ユ</button>
                        <button className={styles.button_5}>ヨ</button>
                        <button className={styles.button_5}>ワ</button>
                        <button className={styles.button_5}>ホ</button>
                        <button className={styles.button_5}>ヘ</button>
                        <button className={styles.button_15}>Backspace</button>
                    </div>
                    <div>
                        <button className={styles.button_15}>Tab</button>
                        <button className={styles.button_5}>タ</button>
                        <button className={styles.button_5}>テ</button>
                        <button className={styles.button_5}>イ</button>
                        <button className={styles.button_5}>ス</button>
                        <button className={styles.button_5}>カ</button>
                        <button className={styles.button_5}>ン</button>
                        <button className={styles.button_5}>ナ</button>
                        <button className={styles.button_5}>ニ</button>
                        <button className={styles.button_5}>ラ</button>
                        <button className={styles.button_5}>セ</button>
                        <button className={styles.button_5}>゛</button>
                        <button className={styles.button_5}>゜</button>
                        <button className={styles.button_5}>ム</button>
                    </div>
                    <div>
                        <button className={styles.button_15}>Caps Lock</button>
                        <button className={styles.button_5}>チ</button>
                        <button className={styles.button_5}>ト</button>
                        <button className={styles.button_5}>シ</button>
                        <button className={styles.button_5}>ハ</button>
                        <button className={styles.button_5}>キ</button>
                        <button className={styles.button_5}>ク</button>
                        <button className={styles.button_5}>マ</button>
                        <button className={styles.button_5}>ノ</button>
                        <button className={styles.button_5}>リ</button>
                        <button className={styles.button_5}>レ</button>
                        <button className={styles.button_5}>ケ</button>
                        <button className={styles.button_15}>Enter</button>
                    </div>
                    <div>
                        <button className={styles.button_15} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_5}>ム</button>
                        <button className={styles.button_5}>ツ</button>
                        <button className={styles.button_5}>サ</button>
                        <button className={styles.button_5}>ソ</button>
                        <button className={styles.button_5}>ヒ</button>
                        <button className={styles.button_5}>コ</button>
                        <button className={styles.button_5}>ミ</button>
                        <button className={styles.button_5}>モ</button>
                        <button className={styles.button_5}>ネ</button>
                        <button className={styles.button_5}>ル</button>
                        <button className={styles.button_5}>メ</button>
                        <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                    </div>
                    <div>
                        <button className={styles.button_5}>Ctrl</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_60} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_5}>Ctrl</button>
                    </div>
                </div>
            } 
            {
                (!useHiragana && pressedShift) &&
                    <div>
                        <div>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}>ァ</button>
                            <button className={styles.button_5}>ゥ</button>
                            <button className={styles.button_5}>ェ</button>
                            <button className={styles.button_5}>ォ</button>
                            <button className={styles.button_5}>ャ</button>
                            <button className={styles.button_5}>ュ</button>
                            <button className={styles.button_5}>ョ</button>
                            <button className={styles.button_5}>ヲ</button>
                            <button className={styles.button_5}>ー</button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_15}>Backspace</button>
                        </div>
                        <div>
                            <button className={styles.button_15}>Tab</button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}>ィ</button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}>「</button>
                            <button className={styles.button_5}>」</button>
                            <button className={styles.button_5}></button>
                        </div>
                        <div>
                            <button className={styles.button_15}>Caps Lock</button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_15}>Enter</button>
                        </div>
                        <div>
                            <button className={styles.button_15} onClick={toggleShift}>Shift</button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}>ﾂ</button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}></button>
                            <button className={styles.button_5}>、</button>
                            <button className={styles.button_5}>。</button>
                            <button className={styles.button_5}>・</button>
                            <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                        </div>
                        <div>
                        <button className={styles.button_5}>Ctrl</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_60} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_5}>Alt</button>
                        <button className={styles.button_5}>Ctrl</button>
                        </div>
                    </div>
                }
        </>
    );
}

export default KeyboardComponent;
