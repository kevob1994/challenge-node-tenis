import { Request, Response } from 'express';
import axios from 'axios';
import { ITableExcel } from '../types/interfaces';

type ApiResponse = Promise<Response>;

export const getDataExcel = async (
  req: Request,
  res: Response
): Promise<ApiResponse> => {
  try {
    const URL = process.env.EXCEL_API || 'process.env.EXCEL_API';

    const response = await axios.get(URL);

    const { cols, rows }: ITableExcel = JSON.parse(
      response.data.substr(47).slice(0, -2)
    ).table;

    const arrayResponse = rows.map((row: any) => {
      const obj: { [k: string]: any } = {};

      for (let i = 0; i < cols.length; i++) {
        obj[cols[i].label] = row.c[i]?.v || '';
      }
      return obj;
    });

    const result: { [k: string]: any } = {};
    // get array for obj with tournament name and all winners with number of wins and all info for last win 
    arrayResponse.map((item: any) => {
      if (!result[item.tourney_slug]) {
        result[item.tourney_slug] = {};
      }

      if (!result[item.tourney_slug][item.singles_winner_name]) {
        result[item.tourney_slug][item.singles_winner_name] = {
          total_wins: 0,
          information: item,
        };
      }

      result[item.tourney_slug][item.singles_winner_name].total_wins++;
      result[item.tourney_slug][item.singles_winner_name].information = item;
    });
 		
		// filter the winner with the most wins per tournament
    const finalResult = Object.keys(result).map((tournament) => {
      let maxWinner = '';
      let maxWins = 0;
      Object.keys(result[tournament]).forEach((winner) => {
        if (result[tournament][winner].total_wins >= maxWins) {
          maxWins = result[tournament][winner].total_wins;
          maxWinner = winner;
        }
      });
      return {
        total_wins: maxWins,
        ...result[tournament][maxWinner].information,
      };
    });

    return res.json(finalResult);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
