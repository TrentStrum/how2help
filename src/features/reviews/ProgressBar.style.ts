import styled from "@emotion/styled";
import { LinearProgress, linearProgressClasses } from "@mui/material";

export const LinearProgressSlim = styled(LinearProgress)(() => ({
	height: 8,

	[`&.${linearProgressClasses.root}`]: {
		backgroundColor:'#333'
		
	},
}));
