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
                    <div className={styles.row}>
                        <button className={styles.button_10}>ろ</button>
                        <button className={styles.button_10}>ぬ</button>
                        <button className={styles.button_10}>ふ</button>
                        <button className={styles.button_10}>あ</button>
                        <button className={styles.button_10}>う</button>
                        <button className={styles.button_10}>え</button>
                        <button className={styles.button_10}>お</button>
                        <button className={styles.button_10}>や</button>
                        <button className={styles.button_10}>ゆ</button>
                        <button className={styles.button_10}>よ</button>
                        <button className={styles.button_10}>わ</button>
                        <button className={styles.button_10}>ほ</button>
                        <button className={styles.button_10}>へ</button>
                        <button className={styles.button_20}>Backspace</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Tab</button>
                        <button className={styles.button_10}>タ</button>
                        <button className={styles.button_10}>テ</button>
                        <button className={styles.button_10}>イ</button>
                        <button className={styles.button_10}>ス</button>
                        <button className={styles.button_10}>カ</button>
                        <button className={styles.button_10}>ン</button>
                        <button className={styles.button_10}>ナ</button>
                        <button className={styles.button_10}>ニ</button>
                        <button className={styles.button_10}>ラ</button>
                        <button className={styles.button_10}>せ</button>
                        <button className={styles.button_10}>゛</button>
                        <button className={styles.button_10}>゜</button>
                        <button className={styles.button_10}>む</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Caps Lock</button>
                        <button className={styles.button_10}>ち</button>
                        <button className={styles.button_10}>と</button>
                        <button className={styles.button_10}>し</button>
                        <button className={styles.button_10}>は</button>
                        <button className={styles.button_10}>き</button>
                        <button className={styles.button_10}>く</button>
                        <button className={styles.button_10}>ま</button>
                        <button className={styles.button_10}>の</button>
                        <button className={styles.button_10}>り</button>
                        <button className={styles.button_10}>り</button>
                        <button className={styles.button_10}>け</button>
                        <button className={styles.button_20}>Enter</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_10}>む</button>
                        <button className={styles.button_10}>つ</button>
                        <button className={styles.button_10}>さ</button>
                        <button className={styles.button_10}>そ</button>
                        <button className={styles.button_10}>ひ</button>
                        <button className={styles.button_10}>こ</button>
                        <button className={styles.button_10}>み</button>
                        <button className={styles.button_10}>も</button>
                        <button className={styles.button_10}>ね</button>
                        <button className={styles.button_10}>る</button>
                        <button className={styles.button_10}>め</button>
                        <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_10}>Ctrl</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_110} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_10}>Ctrl</button>
                    </div>
                </div>
            }
            {
            (useHiragana && pressedShift) &&
                <div>
                    <div className={styles.row}>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}>ぁ</button>
                        <button className={styles.button_10}>ぅ</button>
                        <button className={styles.button_10}>ぇ</button>
                        <button className={styles.button_10}>ぉ</button>
                        <button className={styles.button_10}>ゃ</button>
                        <button className={styles.button_10}>ゅ</button>
                        <button className={styles.button_10}>ょ</button>
                        <button className={styles.button_10}>を</button>
                        <button className={styles.button_10}>ー</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_20}>Backspace</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Tab</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}>ぃ</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}>「</button>
                        <button className={styles.button_10}>」</button>
                        <button className={styles.button_10}></button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Caps Lock</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_20}>Enter</button>
                    </div>
                    <div className={styles.row}>
                   
                        <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}>っ</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}>、</button>
                        <button className={styles.button_10}>。</button>
                        <button className={styles.button_10}>・</button>
                        <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_10}>Ctrl</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_110} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_10}>Ctrl</button>
                    </div>
                </div>
            }
            {
            (!useHiragana && !pressedShift) &&
                <div>
                    <div className={styles.row}>
                        <button className={styles.button_10}>ロ</button>
                        <button className={styles.button_10}>ヌ</button>
                        <button className={styles.button_10}>フ</button>
                        <button className={styles.button_10}>ア</button>
                        <button className={styles.button_10}>ウ</button>
                        <button className={styles.button_10}>エ</button>
                        <button className={styles.button_10}>オ</button>
                        <button className={styles.button_10}>ヤ</button>
                        <button className={styles.button_10}>ユ</button>
                        <button className={styles.button_10}>ヨ</button>
                        <button className={styles.button_10}>ワ</button>
                        <button className={styles.button_10}>ホ</button>
                        <button className={styles.button_10}>ヘ</button>
                        <button className={styles.button_20}>Backspace</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Tab</button>
                        <button className={styles.button_10}>タ</button>
                        <button className={styles.button_10}>テ</button>
                        <button className={styles.button_10}>イ</button>
                        <button className={styles.button_10}>ス</button>
                        <button className={styles.button_10}>カ</button>
                        <button className={styles.button_10}>ン</button>
                        <button className={styles.button_10}>ナ</button>
                        <button className={styles.button_10}>ニ</button>
                        <button className={styles.button_10}>ラ</button>
                        <button className={styles.button_10}>セ</button>
                        <button className={styles.button_10}>゛</button>
                        <button className={styles.button_10}>゜</button>
                        <button className={styles.button_10}>ム</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Caps Lock</button>
                        <button className={styles.button_10}>チ</button>
                        <button className={styles.button_10}>ト</button>
                        <button className={styles.button_10}>シ</button>
                        <button className={styles.button_10}>ハ</button>
                        <button className={styles.button_10}>キ</button>
                        <button className={styles.button_10}>ク</button>
                        <button className={styles.button_10}>マ</button>
                        <button className={styles.button_10}>ノ</button>
                        <button className={styles.button_10}>リ</button>
                        <button className={styles.button_10}>レ</button>
                        <button className={styles.button_10}>ケ</button>
                        <button className={styles.button_20}>Enter</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_10}>ム</button>
                        <button className={styles.button_10}>ツ</button>
                        <button className={styles.button_10}>サ</button>
                        <button className={styles.button_10}>ソ</button>
                        <button className={styles.button_10}>ヒ</button>
                        <button className={styles.button_10}>コ</button>
                        <button className={styles.button_10}>ミ</button>
                        <button className={styles.button_10}>モ</button>
                        <button className={styles.button_10}>ネ</button>
                        <button className={styles.button_10}>ル</button>
                        <button className={styles.button_10}>メ</button>
                        <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_10}>Ctrl</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_110} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_10}>Ctrl</button>
                    </div>
                </div>
            } 
            {
                (!useHiragana && pressedShift) &&
                    <div>
                        <div className={styles.row}>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}>ァ</button>
                            <button className={styles.button_10}>ゥ</button>
                            <button className={styles.button_10}>ェ</button>
                            <button className={styles.button_10}>ォ</button>
                            <button className={styles.button_10}>ャ</button>
                            <button className={styles.button_10}>ュ</button>
                            <button className={styles.button_10}>ョ</button>
                            <button className={styles.button_10}>ヲ</button>
                            <button className={styles.button_10}>ー</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_20}>Backspace</button>
                        </div>
                        <div className={styles.row}>
                            <button className={styles.button_20}>Tab</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}>ィ</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}>「</button>
                            <button className={styles.button_10}>」</button>
                            <button className={styles.button_10}></button>
                        </div>
                        <div className={styles.row}>
                            <button className={styles.button_20}>Caps Lock</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_20}>Enter</button>
                        </div>
                        <div className={styles.row}>
                            <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}>ﾂ</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}>、</button>
                            <button className={styles.button_10}>。</button>
                            <button className={styles.button_10}>・</button>
                            <button className={styles.button_10} onClick={toggleShift}>Shift</button>
                        </div>
                        <div className={styles.row}>
                        <button className={styles.button_10}>Ctrl</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_110} onClick={toggleHiragana}>Hiragana/Katakana</button>
                        <button className={styles.button_10}>Alt</button>
                        <button className={styles.button_10}>Ctrl</button>
                        </div>
                    </div>
                }
        </>
    );
}

export default KeyboardComponent;
