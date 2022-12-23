import { MultiStoryContainerProps, ScrollValue, ViewConfig } from '../types';
declare const useMultiStoryContainer: (flatListRef: any, { userStoryIndex, backgroundColor, transitionMode, }: Partial<MultiStoryContainerProps>, onScrollBeginDrag: () => void, onScrollEndDrag: () => void, handleLongPress: (visibility: boolean) => void, onComplete?: () => void) => {
    scrollX: ScrollValue;
    onViewRef: import("react").MutableRefObject<({ viewableItems }: ViewConfig) => void>;
    viewabilityConfig: import("react").MutableRefObject<{
        itemVisiblePercentThreshold: number;
    }>;
    listStyle: {
        flex: number;
        backgroundColor: string;
    } | {
        transform: ({
            scale: number;
            translateX?: undefined;
            translateY?: undefined;
        } | {
            translateX: number;
            scale?: undefined;
            translateY?: undefined;
        } | {
            translateY: number;
            scale?: undefined;
            translateX?: undefined;
        })[];
        backgroundColor: string;
    };
    rootStyle: {
        height: number;
        width: number;
        backgroundColor: string;
    };
    storyIndex: number;
    gestureHandler: (event: import("react-native-gesture-handler").PanGestureHandlerGestureEvent) => void;
    setStoryIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    onScroll: (...args: any[]) => void;
    animatedTransitionStyle: (index: number) => {
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    };
};
export default useMultiStoryContainer;
