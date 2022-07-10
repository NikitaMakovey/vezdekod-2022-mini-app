import React from 'react';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div } from '@vkontakte/vkui';

const autographs = [
	{ id: "1", author: "Me 1", autograph: "MY ME" },
	{ id: "2", author: "Me 2", autograph: "MY ONE" },
	{ id: "3", author: "Another Me 3", autograph: "ME1" },
	{ id: "4", author: "Me 4", autograph: "MY DOG" },
	{ id: "5", author: "One more Me 5", autograph: "MY CAR" },
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
		<Group header={<Header mode="secondary">Вернуться в свой альбом</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="my-album">
					Мой альбом
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Album;
