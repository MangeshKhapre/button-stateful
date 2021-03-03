import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import BasicApp from "./basic";
import InverseVariantApp from "./inverseVariant";
import NoIconApp from "./noIcon";
import TextVariantApp from "./textVariant";


// This stateful button changes its text and icon when you select it. The button changes its text and icon again when you hover over it. This uses the default variant.
export const Basic = () => BasicApp;
Basic.storyName = "Stateful Button";

// This stateful button changes its text and icon when you select it. The button changes its text and icon again when you hover over it. This uses the inverse variant.
export const InverseVariant = () => InverseVariantApp;
InverseVariant.storyName = "Stateful Button with Inverse Variant";

// This stateful button uses the brand variant and does not specify icons for any states.
export const NoIcon = () => NoIconApp;
NoIcon.storyName = "Stateful Button with No Icon";

// This stateful button uses the text variant and specifies icons for selected and not-selected states, but not the hover state.
export const TextVariant = () => TextVariantApp;
TextVariant.storyName = "Stateful Button with Text and Icon";
