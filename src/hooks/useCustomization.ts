import { useContext } from 'react';
import { CustomizationContext } from '../lib/Themes/customization';


export const useCustomization = () => {
	const context = useContext(CustomizationContext);
	if (!context) {
		throw new Error('useCustomization must be used within a CustomizationProvider');
	}
	return context;
};
