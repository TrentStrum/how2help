import { Avatar, AvatarGroup, Link, Tooltip } from '@mui/material';

const AvatarGroupTooltips = () => {
	return (
		<AvatarGroup max={4}>
			<Tooltip arrow placement="top" title="View profile for Remy Sharp">
				<Avatar
					alt="Remy Sharp"
					component={Link}
					href=""
					onClick={(e) => e.preventDefault()}
					src="/avatars/1.png"
				/>
			</Tooltip>
			<Tooltip arrow placement="top" title={`${'View profile for'} Travis Howard`}>
				<Avatar
					alt="Travis Howard"
					component={Link}
					href=""
					onClick={(e) => e.preventDefault()}
					src="/avatars/2.png"
				/>
			</Tooltip>
			<Tooltip arrow placement="top" title="View profile for Cindy Baker">
				<Avatar
					alt="Cindy Baker"
					component={Link}
					href=""
					onClick={(e) => e.preventDefault()}
					src="/avatars/3.png"
				/>
			</Tooltip>
			<Tooltip arrow placement="top" title="View profile for Agnes Walker">
				<Avatar
					alt="Agnes Walker"
					component={Link}
					href=""
					onClick={(e) => e.preventDefault()}
					src="/avatars/4.png"
				/>
			</Tooltip>
			<Tooltip arrow placement="top" title="View profile for Trevor Henderson">
				<Avatar
					alt="Trevor Henderson"
					component={Link}
					href=""
					onClick={(e) => e.preventDefault()}
					src="/avatars/5.png"
				/>
			</Tooltip>
		</AvatarGroup>
	);
};

export { AvatarGroupTooltips };
