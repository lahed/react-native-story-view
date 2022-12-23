import type { ViewToken } from 'react-native';
import type { Value } from 'react-native-reanimated';
import type { StoriesType, StoryContainerProps } from '../StoryView/types';
export declare enum TransitionMode {
    Default = 0,
    Cube = 1,
    Scale = 2
}
export interface MultiStoryContainerProps extends Omit<StoryContainerProps, 'stories'> {
    stories: StoriesType[];
    onComplete?: () => void;
    onUserStoryIndexChange?: (index: number) => void;
    userStoryIndex?: number;
    visible?: boolean;
    viewedStories: Array<boolean[]>;
    onChangePosition?: (storyIndex: number, userIndex?: number) => void | undefined;
    transitionMode?: TransitionMode;
}
export interface MultiStoryListItemProps extends Omit<StoryContainerProps, 'stories'> {
    item: StoriesType;
    index: number;
    storyIndex: number;
    animatedTransitionStyle: any;
    viewedStories: Array<boolean[]>;
    nextStory?: () => void;
    previousStory?: () => void;
    onComplete?: () => void;
}
export interface ViewConfig {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
}
export interface ListItemProps {
    item: StoriesType;
    index: number;
}
export interface ListItemRef {
    onScrollBegin: () => void;
    onScrollEnd: () => void;
    handleLongPress: (visibility: boolean) => void;
}
export interface DraggableGestureProps {
    backgroundColor?: string;
    onComplete?: () => void;
    onScrollBeginDrag: () => void;
    onScrollEndDrag: () => void;
    handleLongPress: (visibility: boolean) => void;
    isKeyboardVisible: boolean;
}
export declare type ScrollValue = Value<number>;
