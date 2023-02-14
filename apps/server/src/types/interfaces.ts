export interface IUser {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IError {
  message: string;
  code: string;
}

export interface IColExcel {
  id: string;
  label: string;
  type: string;
  pattern: string;
}

export interface IObjectCol {
  v: any;
  f: string;
}

export interface IRowExcel {
  c: IObjectCol[];
}

export interface ITableExcel {
  cols: IColExcel[];
  rows: IRowExcel[];
  parsedNumHeaders: number;
}

export interface IExcelInformation {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: ITableExcel;
}


export interface IInfoTournament {
	tourney_year: number;
	tourney_order: number;
	tourney_name: string;
	tourney_id: number;
	tourney_slug: string;
	tourney_location: string;
	tourney_dates: string;
	tourney_month: number;
	tourney_day: number;
	tourney_singles_draw: number;
	tourney_doubles_draw: number;
	tourney_conditions: string;
	tourney_surface: string;
	tourney_fin_commit: string;
	tourney_url_suffix: string;
	singles_winner_name: string;
	singles_winner_url: string;
	singles_winner_player_slug: string;
	singles_winner_player_id: string;
	doubles_winner_1_name: string;
	doubles_winner_1_url: string;
	doubles_winner_1_player_slug: string;
	doubles_winner_1_player_id: string;
	doubles_winner_2_name: string;
	doubles_winner_2_url: string;
	doubles_winner_2_player_slug: string;
	doubles_winner_2_player_id: string;
	tourney_year_id: string;
	total_wins?: number;
}
