import * as React from 'react'
import {StyleSheet, Image, View} from 'react-native';
import Svg, { Path } from "react-native-svg"


const Icon = () => (
    <SvgComponent />
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        aspectRatio: 1,

        borderRadius: 10,
        marginHorizontal: 3.5,
        marginTop: 5,
        backgroundColor: "#C4C4C4",
    },
    img: {
        width: "100%",
        height: "100%",
    }

})

export default Icon


function SvgComponent(props) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.372 24c-.263 0-.524-.086-.747-.254a1.361 1.361 0 01-.496-1.374l1.544-7.097-5.236-4.792A1.368 1.368 0 01.063 9.07a1.288 1.288 0 011.097-.915l6.928-.656 2.739-6.69A1.275 1.275 0 0112 0c.511 0 .971.317 1.173.808l2.74 6.69 6.926.656c.51.048.94.408 1.098.915a1.368 1.368 0 01-.373 1.414l-5.236 4.791 1.544 7.097a1.36 1.36 0 01-.496 1.374 1.229 1.229 0 01-1.402.064L12 20.084 6.026 23.81a1.238 1.238 0 01-.654.189zM12 18.479c.227 0 .452.063.654.189l5.638 3.518-1.457-6.698a1.366 1.366 0 01.404-1.297l4.944-4.525-6.541-.62a1.28 1.28 0 01-1.06-.806L12 1.927 9.415 8.241c-.182.45-.587.758-1.057.803l-6.542.62L6.76 14.19c.354.323.509.82.404 1.298l-1.456 6.698 5.638-3.517c.202-.126.427-.19.654-.19zM8.035 7.627l-.001.002v-.002zm7.928-.003l.001.002-.001-.002z"
                fill="#A10D99"
            />
        </Svg>
    )
}
