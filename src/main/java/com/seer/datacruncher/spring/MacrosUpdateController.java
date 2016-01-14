/*
 *   SeerDataCruncher is a Data Quality Firewall, a Data Quality Monitor and an ETL middleware to manage data streams on the fly.
 *   SeerDataCruncher is released under AGPL license.

 *   Copyright (c) 2015 foreSEE-Revolution ltd
 *   All rights reserved
 *
 *   Site: http://www.see-r.com
 *   Contact:  info@see-r.com
 */

package com.seer.datacruncher.spring;

import com.seer.datacruncher.jpa.dao.DaoSet;
import com.seer.datacruncher.jpa.entity.MacroEntity;
import com.seer.datacruncher.jpa.entity.SchemaEntity;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MacrosUpdateController implements Controller, DaoSet {

	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String json = request.getParameter("results");
		if (json == null) {
			json = request.getReader().readLine();
		}
		ObjectMapper mapper = new ObjectMapper();
		MacroEntity macroEntity = new MacroEntity();
		macroEntity = mapper.readValue(json, MacroEntity.class);
		ServletOutputStream out;
		response.setContentType("application/json");
		out = response.getOutputStream();
		out.write(mapper.writeValueAsBytes(macrosDao.update(macroEntity)));
		out.flush();
		out.close();
		SchemaEntity schema = schemasDao.find(macroEntity.getIdSchema());
		if (schema != null && schema.getIdSchema() != 0) {
			schemasXSDDao.destroy(schema.getIdSchema());
		}
		return null;
	}
}