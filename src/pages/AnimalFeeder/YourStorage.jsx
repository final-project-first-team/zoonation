import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

export default function YourStorage() {
	return (
		<Fragment>
			<Typography>Your Storage</Typography>
			<List>
				<ListItem style={{ paddingTop: 0, paddingBottom: '2%', textAlign: 'center' }}>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="X 20" />
					<RemoveCircleOutlineIcon />
					<AddCircleOutlineIcon />
				</ListItem>
				<ListItem style={{ paddingTop: '2%', paddingBottom: 0, textAlign: 'center' }}>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="X 20" />
					<RemoveCircleOutlineIcon />
					<AddCircleOutlineIcon />
				</ListItem>
			</List>
		</Fragment>
	);
}
