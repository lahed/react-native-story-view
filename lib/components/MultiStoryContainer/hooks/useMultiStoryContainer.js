import { useEffect, useRef, useState } from 'react';
import Animated, { useValue } from 'react-native-reanimated';
import { useKeyboardListener } from '../../../hooks';
import { TransitionMode, } from '../types';
import { cubeTransition, defaultTransition, scaleTransition, } from '../utils/StoryTransitions';
import useDraggableGesture from './useDraggableGesture';
const useMultiStoryContainer = (flatListRef, { userStoryIndex, backgroundColor, transitionMode = TransitionMode.Cube, }, onScrollBeginDrag, onScrollEndDrag, handleLongPress, onComplete) => {
    const [storyIndex, setStoryIndex] = useState(userStoryIndex !== null && userStoryIndex !== void 0 ? userStoryIndex : 0);
    const scrollX = useValue(0);
    const previousIndex = useRef(0);
    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 70,
    });
    const isKeyboardVisible = useKeyboardListener();
    useEffect(() => {
        var _a;
        (_a = flatListRef === null || flatListRef === void 0 ? void 0 : flatListRef.current) === null || _a === void 0 ? void 0 : _a.setNativeProps({ scrollEnabled: !isKeyboardVisible });
    }, [flatListRef, isKeyboardVisible]);
    const onViewRef = useRef(({ viewableItems }) => {
        var _a;
        const index = (_a = viewableItems === null || viewableItems === void 0 ? void 0 : viewableItems[0]) === null || _a === void 0 ? void 0 : _a.index;
        if (index == null)
            return;
        /* viewableItems returns array of current/next viewable item
               During story transition current/next or previous/current both visible on screen so array contains both items.
               To consider only next/previous item, checking length is only 1 and it is not previous story.
            */
        if (viewableItems.length === 1 && index !== previousIndex.current) {
            setStoryIndex(index);
            previousIndex.current = index;
        }
    });
    const onScroll = Animated.event([
        {
            nativeEvent: {
                contentOffset: { x: scrollX },
            },
        },
    ], { useNativeDriver: true });
    const animatedTransitionStyle = (index) => {
        switch (transitionMode) {
            case TransitionMode.Cube:
                return cubeTransition(index, scrollX);
            case TransitionMode.Scale:
                return scaleTransition(index, scrollX);
            default:
                return defaultTransition();
        }
    };
    const { listStyle, rootStyle, gestureHandler } = useDraggableGesture({
        backgroundColor,
        onComplete,
        onScrollBeginDrag,
        onScrollEndDrag,
        handleLongPress,
        isKeyboardVisible,
    });
    return {
        scrollX,
        onViewRef,
        viewabilityConfig,
        listStyle,
        rootStyle,
        storyIndex,
        gestureHandler,
        setStoryIndex,
        onScroll,
        animatedTransitionStyle,
    };
};
export default useMultiStoryContainer;
//# sourceMappingURL=useMultiStoryContainer.js.map