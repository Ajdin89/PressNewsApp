import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const CustomPagination = ({ current, total, take, selectPage }) => {
	const pages = [...Array(total / take).keys()].map((n) => n + 1);

	const selectPrev = () => {
		if (current - 1 === 0) selectPage(pages.length);
		else selectPage(current - 1);
	};

	const selectNext = () => {
		if (current === pages.length) selectPage(1);
		else selectPage(current + 1);
	};

	return (
		<Pagination aria-label='Page navigation example'>
			<PaginationItem>
				<PaginationLink first onClick={() => selectPage(1)} />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink previous onClick={selectPrev} />
			</PaginationItem>

			{pages.map((p) => (
				<PaginationItem
					key={p}
					active={current === p}
					onClick={() => selectPage(p)}
				>
					<PaginationLink href='#'>{p}</PaginationLink>
				</PaginationItem>
			))}

			<PaginationItem>
				<PaginationLink next onClick={selectNext} />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink last onClick={() => selectPage(pages.length)} />
			</PaginationItem>
		</Pagination>
	);
};

export default CustomPagination;
