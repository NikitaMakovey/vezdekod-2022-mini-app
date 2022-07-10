import React from 'react';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div } from '@vkontakte/vkui';

const autographs = [
	{ id: "1", author: "My Friend 1", autograph: "MY FRIEND1" },
	{ id: "2", author: "My Friend 2", autograph: "MY FRIEND2" },
	{ id: "3", author: "My Friend 3", autograph: "MY FRIEND3" },
	{ id: "4", author: "My Friend 4", autograph: "MY FRIEND4" },
	{ id: "5", author: "My Friend 5", autograph: "MY FRIEND5" },
];

const Album = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Альбом автографов</PanelHeader>
		{fetchedUser &&
			<Group header={<Header mode="secondary">Сохранённые автографы</Header>}>
				{autographs.map(({ id, author, autograph }) => (
					<Cell key={id} before={autograph} description={author} />
				))}
			</Group>
		}
		<Group header={<Header mode="secondary">Посмотреть альбомы друзей</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="friend-albums">
					Альбомы друзей
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Album;
