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

    const handleCharacterKeyPress = (e, character) => {
        props.handleChange(character);
    }
    

    return (
        <>
            {
            (useHiragana && !pressedShift) &&
                <div>
                    <div className={styles.row}>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ろ")}>ろ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ぬ")}>ぬ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ふ")}>ふ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "あ")}>あ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "う")}>う</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "え")}>え</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "お")}>お</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "や")}>や</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ゆ")}>ゆ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "よ")}>よ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "わ")}>わ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ほ")}>ほ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "へ")}>へ</button>
                        <button className={styles.button_20}>Backspace</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Tab</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "タ")}>タ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "テ")}>テ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "イ")}>イ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ス")}>ス</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "カ")}>カ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ン")}>ン</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ナ")}>ナ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ニ")}>ニ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ラ")}>ラ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "せ")}>せ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "゛")}>゛</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "゜")}>゜</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "む")}>む</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Caps Lock</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ち")}>ち</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "と")}>と</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "し")}>し</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "は")}>は</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "き")}>き</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "く")}>く</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ま")}>ま</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "の")}>の</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "り")}>り</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "り")}>り</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "け")}>け</button>
                        <button className={styles.button_20}>Enter</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "む")}>む</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "つ")}>つ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "さ")}>さ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "そ")}>そ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ひ")}>ひ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "こ")}>こ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "み")}>み</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "も")}>も</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ね")}>ね</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "る")}>る</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "め")}>め</button>
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
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ぁ")}>ぁ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ぅ")}>ぅ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ぇ")}>ぇ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ぉ")}>ぉ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ゃ")}>ゃ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ゅ")}>ゅ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ょ")}>ょ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "を")}>を</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ー")}>ー</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_20}>Backspace</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Tab</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ぃ")}>ぃ</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "「")}>「</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "」")}>」</button>
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
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "っ")}>っ</button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10}></button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "、")}>、</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "。")}>。</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "・")}>・</button>
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
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ロ")}>ロ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ヌ")}>ヌ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "フ")}>フ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ア")}>ア</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ウ")}>ウ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "エ")}>エ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "オ")}>オ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ヤ")}>ヤ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ユ")}>ユ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ヨ")}>ヨ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ワ")}>ワ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ホ")}>ホ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ヘ")}>ヘ</button>
                        <button className={styles.button_20}>Backspace</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Tab</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "タ")}>タ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "テ")}>テ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "イ")}>イ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ス")}>ス</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "カ")}>カ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ン")}>ン</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ナ")}>ナ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ニ")}>ニ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ラ")}>ラ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "セ")}>セ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "゛")}>゛</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "゜")}>゜</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ム")}>ム</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20}>Caps Lock</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "チ")}>チ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ト")}>ト</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "シ")}>シ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ハ")}>ハ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "キ")}>キ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ク")}>ク</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "マ")}>マ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ノ")}>ノ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "リ")}>リ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "レ")}>レ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ケ")}>ケ</button>
                        <button className={styles.button_20}>Enter</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button_20} onClick={toggleShift}>Shift</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ム")}>ム</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ツ")}>ツ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "サ")}>サ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ソ")}>ソ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ヒ")}>ヒ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "コ")}>コ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ミ")}>ミ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "モ")}>モ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ネ")}>ネ</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ル")}>ル</button>
                        <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "メ")}>メ</button>
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
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ァ")}>ァ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ゥ")}>ゥ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ェ")}>ェ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ォ")}>ォ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ャ")}>ャ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ュ")}>ュ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ョ")}>ョ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ヲ")}>ヲ</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ー")}>ー</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_20}>Backspace</button>
                        </div>
                        <div className={styles.row}>
                            <button className={styles.button_20}>Tab</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ィ")}>ィ</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "「")}>「</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "」")}>」</button>
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
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "ﾂ")}>ﾂ</button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10}></button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "、")}>、</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "。")}>。</button>
                            <button className={styles.button_10} onClick={e => handleCharacterKeyPress(e, "・")}>・</button>
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
