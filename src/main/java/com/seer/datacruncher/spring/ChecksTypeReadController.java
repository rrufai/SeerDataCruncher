/*
 * Copyright (c) 2015  www.see-r.com
 * All rights reserved
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.seer.datacruncher.spring;

import com.seer.datacruncher.jpa.ReadList;
import com.seer.datacruncher.jpa.dao.DaoSet;
import com.seer.datacruncher.jpa.entity.ChecksTypeEntity;
import com.seer.datacruncher.jpa.entity.SchemaFieldCheckTypesEntity;
import com.seer.datacruncher.jpa.entity.SchemaFieldEntity;

import java.io.IOException;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;


public class ChecksTypeReadController implements Controller, DaoSet {

	@SuppressWarnings("unchecked")
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ObjectMapper mapper = new ObjectMapper();
		ServletOutputStream out = null;
		response.setContentType("application/json");
		out = response.getOutputStream();
		String idSchemaField = request.getParameter("idSchemaField");
		ReadList readList = checksTypeDao.read(-1, -1);
		List<ChecksTypeEntity> checkTypeEntites = (List<ChecksTypeEntity>)readList.getResults();
		if(StringUtils.isNotEmpty(idSchemaField)){
			String leftPane = request.getParameter("leftPane");
			ReadList assignedReadList = checksTypeDao.readCheckTypeBySchemaFieldId(Long.parseLong(idSchemaField));
			List<ChecksTypeEntity> assignedCheckTypeEntites = (List<ChecksTypeEntity>)assignedReadList.getResults();
			if("true".equalsIgnoreCase(leftPane)){
				if(CollectionUtils.isNotEmpty(assignedCheckTypeEntites)){
					checkTypeEntites.removeAll(assignedCheckTypeEntites);
				}
			}else{
				readList.setResults(assignedCheckTypeEntites);
			}
		}
		out.write(mapper.writeValueAsBytes(readList));
		out.flush();
		out.close();
		return null;
	}
}